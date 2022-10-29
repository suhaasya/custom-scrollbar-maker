type ControlMenuProps = {
  children: React.ReactNode;
  title: string;
};
function ControlMenu(props: ControlMenuProps) {
  const { children, title } = props;

  return (
    <div className="flex gap-4 items-center justify-center p-1  bg-[#F7ECDE] border-solid border-t border-[#E9DAC1] flex-grow">
      <h4 className="w-1/2 text-right">{title}:</h4>
      <div className="w-1/2">{children}</div>
    </div>
  );
}

export default ControlMenu;
