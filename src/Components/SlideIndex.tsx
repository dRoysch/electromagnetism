type SlideIndexProps = {
  titles: string[];
  handleClick: (arg0: string) => void;
};

function SlideIndex({ titles, handleClick }: SlideIndexProps) {
  const onClick = (title: string) => () => {
    handleClick(title);
  };
  return (
    <div className="SlideIndex">
      <ul>
        {titles.map((title) => (
          <li key={title} onClick={onClick(title)}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlideIndex;
