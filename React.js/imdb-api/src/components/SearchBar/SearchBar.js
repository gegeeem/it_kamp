import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "../NavBar/SearchIcon";
import { Button } from "@nextui-org/react";
import "./SearchBar.css";

export function SearchBar({ funcOnChange, fncOnClc }) {
  return (
    <Input
      size="xl"
      className="input-bar"
      clearable
      contentLeft={
        <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
      }
      contentLeftStyling={false}
      css={{
        w: "600px",
        "@xsMax": {
          mw: "300px",
        },
        "& .nextui-input-content--left": {
          h: "100%",
          ml: "$4",
          dflex: "center",
        },
        marginTop: "$8",
      }}
      // contentRight={
      //   <Button size="lg" aria-label="search" auto onClick={fncOnClc}>
      //     Search
      //   </Button>
      // }
      placeholder="Keyword..."
      onChange={funcOnChange}
      aria-label="input"
    />
  );
}
