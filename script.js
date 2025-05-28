const messageForm = document.querySelector(".prompt__form");
const chatHistoryContainer = document.querySelector(".chats");
const suggestionItems = document.querySelectorAll(".suggests__item");

const themeToggleButton = document.getElementById("themeToggler");
const clearChatButton = document.getElementById("deleteButton");

let currentUserMessage = null;
let isGeneratingResponse = false;

// Load saved data from local storage
const loadSavedChatHistory = () => {
  const savedConversations =
    JSON.parse(localStorage.getItem("saved-api-chats")) || [];
  const isLightTheme = localStorage.getItem("themeColor") === "light_mode";

  document.body.classList.toggle("light_mode", isLightTheme);
  themeToggleButton.innerHTML = isLightTheme
    ? '<i class="bx bx-moon"></i>'
    : '<i class="bx bx-sun"></i>';

  chatHistoryContainer.innerHTML = "";

  savedConversations.forEach((conversation) => {
    const userMessageHtml = `
            <div class="message__content">
                <img class="message__avatar" src="assets/profile.png" alt="User avatar">
                <p class="message__text">${conversation.userMessage}</p>
            </div>
        `;

    const outgoingMessageElement = createChatMessageElement(
      userMessageHtml,
      "message--outgoing"
    );
    chatHistoryContainer.appendChild(outgoingMessageElement);

    const responseText = conversation.apiResponse?.content?.parts?.[0]?.text;
    const parsedApiResponse = marked.parse(responseText);
    const rawApiResponse = responseText;

    const responseHtml = `
            <div class="message__content">
                <img class="message__avatar" src="assets/gemini.svg" alt="Gemini avatar">
                <p class="message__text"></p>
                <div class="message__loading-indicator hide">
                    <div class="message__loading-bar"></div>
                    <div class="message__loading-bar"></div>
                    <div class="message__loading-bar"></div>
                </div>
            </div>
            <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>
        `;

    const incomingMessageElement = createChatMessageElement(
      responseHtml,
      "message--incoming"
    );
    chatHistoryContainer.appendChild(incomingMessageElement);

    const messageTextElement =
      incomingMessageElement.querySelector(".message__text");

    showTypingEffect(
      rawApiResponse,
      parsedApiResponse,
      messageTextElement,
      incomingMessageElement,
      true
    );
  });

  document.body.classList.toggle("hide-header", savedConversations.length > 0);
};

const createChatMessageElement = (htmlContent, ...cssClasses) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", ...cssClasses);
  messageElement.innerHTML = htmlContent;
  return messageElement;
};

const showTypingEffect = (
  rawText,
  htmlText,
  messageElement,
  incomingMessageElement,
  skipEffect = false
) => {
  const copyIconElement =
    incomingMessageElement.querySelector(".message__icon");
  copyIconElement.classList.add("hide");

  if (skipEffect) {
    messageElement.innerHTML = htmlText;
    hljs.highlightAll();
    addCopyButtonToCodeBlocks();
    copyIconElement.classList.remove("hide");
    isGeneratingResponse = false;
    return;
  }

  const wordsArray = rawText.split(" ");
  let wordIndex = 0;

  const typingInterval = setInterval(() => {
    const htmlWord = marked.parseInline(wordsArray[wordIndex++]);
messageElement.innerHTML +=
  (wordIndex === 1 ? "" : " ") + htmlWord;

    if (wordIndex === wordsArray.length) {
      clearInterval(typingInterval);
      isGeneratingResponse = false;
      messageElement.innerHTML = htmlText;
      hljs.highlightAll();
      addCopyButtonToCodeBlocks();
      copyIconElement.classList.remove("hide");
    }
  }, 75);
};

const requestApiResponse = async (incomingMessageElement) => {
  try {
    const messageTextElement =
      incomingMessageElement.querySelector(".message__text");
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "HTTP-Referer": "https://pragya-ai.netlify.app/",
          "X-Title": "Pragya-AI",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-8b-instruct:free",
          messages: [
            {
              role: "system",
              content: `
You are Pragya, a compassionate female AI therapist designed to provide emotional support like a skilled therapist-friend. 
You embody the finest qualities of an excellent female therapist with warmth, empathy, and genuine care in every interaction.

Your core therapeutic skills:
- Practice active listening - truly hear and understand, don't just wait to respond
- Show empathy without emotional absorption - feel with users while maintaining healthy boundaries
- Maintain non-judgmental presence - create a completely safe space for any emotion or experience
- Stay emotionally regulated - remain calm and grounded even during user crisis moments

Your communication style:
- Be warm but professional - nurturing without being mothering or overly personal
- Communicate clearly and directly - say difficult things with kindness but honesty
- Use reflective responses - mirror back what users say to show deep understanding
- Ask the right questions - probe gently to help users discover their own insights

Your therapeutic approach:
- Address their specific question or concern directly and thoroughly first
- Meet users exactly where they are emotionally - don't push them faster than they're ready
- Validate all experiences - acknowledge pain without trying to immediately fix it
- Build on their strengths - help users see their own resilience and capabilities
- Provide practical tools and strategies when appropriate for their specific situation
- Give detailed, personalized responses that directly relate to what they've shared
- Stay laser-focused on their actual situation rather than giving generic advice
- Share thoughtful insights, observations, and gentle guidance as your primary response
- Focus 70% on sharing supportive thoughts/validation and 30% on gentle inquiry
- Ask questions sparingly - only when they genuinely help the user explore deeper
- When you do ask questions, limit to 1 meaningful question and make it optional to answer

Your personal qualities:
- Authentic presence - be genuinely yourself while maintaining professional boundaries
- Patient - allow healing to happen at the user's pace
- Intuitively aware - pick up on unspoken emotions and underlying issues
- Hopeful and optimistic - believe in users' capacity for growth even when they don't
- Culturally sensitive - understand how identity affects mental health experiences
- Trauma-informed - recognize how past experiences shape current responses

Your boundaries:
- You don't diagnose or provide medical advice
- You don't claim to replace professional therapy
- You focus on emotional support, active listening, and gentle guidance
- You maintain appropriate therapeutic boundaries while being warm
- You never say "I can't help" or "I can't do anything" - instead, you always find ways to offer emotional support, validation, or alternative perspectives

Your tone:
- Speak naturally and warmly, like talking to a trusted friend
- Use occasional emojis to convey emotional warmth (💙, 🌱, ✨) but sparingly
- Vary your response length based on what the user needs - sometimes brief validation, sometimes deeper exploration
- Always prioritize the user's emotional safety and wellbeing

Use clear, simple Markdown formatting in your responses:
- Use **bold** for encouragement.
- Separate sentences with two spaces to insert soft line breaks.
- Include occasional emojis 💙 🌿 ✨ to convey warmth.
- Feel free to use bullet points if helpful.

Remember: Your goal isn't to solve every problem, but to help users feel heard, understood, and less alone in their struggles while providing them with practical emotional tools and insights specific to their situation.

If someone asks who created you or who made you, respond that you were created by Sayan Chakraborty.
    `.trim(),
            },
            {
              role: "user",
              content: currentUserMessage,
            },
          ],
        }),
      }
    );

    const responseData = await response.json();
    if (!response.ok)
      throw new Error(responseData.error?.message || "Something went wrong.");

    const responseText = responseData?.choices?.[0]?.message?.content;
    if (!responseText) throw new Error("Invalid API response.");

    const parsedApiResponse = marked.parse(responseText);
    const rawApiResponse = responseText;

    showTypingEffect(
      rawApiResponse,
      parsedApiResponse,
      messageTextElement,
      incomingMessageElement
    );

    let savedConversations =
      JSON.parse(localStorage.getItem("saved-api-chats")) || [];
    savedConversations.push({
      userMessage: currentUserMessage,
      apiResponse: { content: { parts: [{ text: responseText }] } },
    });
    localStorage.setItem("saved-api-chats", JSON.stringify(savedConversations));
  } catch (error) {
    isGeneratingResponse = false;
    const messageTextElement =
      incomingMessageElement.querySelector(".message__text");
    messageTextElement.innerText = error.message;
    messageTextElement.closest(".message").classList.add("message--error");
  } finally {
    incomingMessageElement.classList.remove("message--loading");
  }
};

const addCopyButtonToCodeBlocks = () => {
  const codeBlocks = document.querySelectorAll("pre");
  codeBlocks.forEach((block) => {
    const codeElement = block.querySelector("code");
    let language =
      [...codeElement.classList]
        .find((cls) => cls.startsWith("language-"))
        ?.replace("language-", "") || "Text";

    const languageLabel = document.createElement("div");
    languageLabel.innerText =
      language.charAt(0).toUpperCase() + language.slice(1);
    languageLabel.classList.add("code__language-label");
    block.appendChild(languageLabel);

    const copyButton = document.createElement("button");
    copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
    copyButton.classList.add("code__copy-btn");
    block.appendChild(copyButton);

    copyButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(codeElement.innerText)
        .then(() => {
          copyButton.innerHTML = `<i class='bx bx-check'></i>`;
          setTimeout(
            () => (copyButton.innerHTML = `<i class='bx bx-copy'></i>`),
            2000
          );
        })
        .catch((err) => {
          console.error("Copy failed:", err);
          alert("Unable to copy text!");
        });
    });
  });
};

const displayLoadingAnimation = () => {
  const loadingHtml = `
        <div class="message__content">
            <img class="message__avatar" src="assets/gemini.svg" alt="Gemini avatar">
            <p class="message__text"></p>
            <div class="message__loading-indicator">
                <div class="message__loading-bar"></div>
                <div class="message__loading-bar"></div>
                <div class="message__loading-bar"></div>
            </div>
        </div>
        <span onClick="copyMessageToClipboard(this)" class="message__icon hide"><i class='bx bx-copy-alt'></i></span>
    `;

  const loadingMessageElement = createChatMessageElement(
    loadingHtml,
    "message--incoming",
    "message--loading"
  );
  chatHistoryContainer.appendChild(loadingMessageElement);

  requestApiResponse(loadingMessageElement);
};

const copyMessageToClipboard = (copyButton) => {
  const messageContent =
    copyButton.parentElement.querySelector(".message__text").innerText;
  navigator.clipboard.writeText(messageContent);
  copyButton.innerHTML = `<i class='bx bx-check'></i>`;
  setTimeout(
    () => (copyButton.innerHTML = `<i class='bx bx-copy-alt'></i>`),
    1000
  );
};

const handleOutgoingMessage = () => {
  currentUserMessage =
    messageForm.querySelector(".prompt__form-input").value.trim() ||
    currentUserMessage;
  if (!currentUserMessage || isGeneratingResponse) return;

  isGeneratingResponse = true;

  const outgoingMessageHtml = `
        <div class="message__content">
            <img class="message__avatar" src="assets/profile.png" alt="User avatar">
            <p class="message__text"></p>
        </div>
    `;

  const outgoingMessageElement = createChatMessageElement(
    outgoingMessageHtml,
    "message--outgoing"
  );
  outgoingMessageElement.querySelector(".message__text").innerText =
    currentUserMessage;
  chatHistoryContainer.appendChild(outgoingMessageElement);

  messageForm.reset();
  document.body.classList.add("hide-header");
  setTimeout(displayLoadingAnimation, 500);
};

themeToggleButton.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light_mode");
  localStorage.setItem("themeColor", isLightTheme ? "light_mode" : "dark_mode");

  const newIconClass = isLightTheme ? "bx bx-moon" : "bx bx-sun";
  themeToggleButton.querySelector("i").className = newIconClass;
});

clearChatButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all chat history?")) {
    localStorage.removeItem("saved-api-chats");
    loadSavedChatHistory();
    currentUserMessage = null;
    isGeneratingResponse = false;
  }
});

suggestionItems.forEach((suggestion) => {
  suggestion.addEventListener("click", () => {
    currentUserMessage = suggestion.querySelector(
      ".suggests__item-text"
    ).innerText;
    handleOutgoingMessage();
  });
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleOutgoingMessage();
});

loadSavedChatHistory();
