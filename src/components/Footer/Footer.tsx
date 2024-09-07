import { Avatar } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="flex gap-4 items-center justify-center p-3 dark:bg-background/20">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
