interface SuggestionProps {
  text: string;
  icon: string;
  onClick?: () => void;
}

export default function SuggestionCard({ text, icon, onClick }: SuggestionProps) {
  return (
    <div className="suggests__item" onClick={onClick} role="button" tabIndex={0}>
      <p className="suggests__item-text">{text}</p>
      <div className="suggests__item-icon">
        <i className={icon}></i>
      </div>
    </div>
  );
}


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// NOTE: Consider edge cases


// TODO: Cleanup legacy code


// TODO: Add documentation


// NOTE: Consider edge cases


// TODO: Add more tests


// TODO: Add more tests


// FIXME: Memory leak potential


// FIXME: Memory leak potential


// NOTE: Refactor for readability


// TODO: Add more tests


// NOTE: Refactor for readability


// NOTE: Refactor for readability


// FIXME: Potential edge case


// NOTE: Temporary workaround


// NOTE: Temporary workaround


// TODO: Improve error handling


// TODO: Improve error handling


// NOTE: Review logic for performance


// NOTE: Temporary workaround
