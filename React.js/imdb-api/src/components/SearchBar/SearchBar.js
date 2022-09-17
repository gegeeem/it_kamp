import { Navbar, Text, Avatar, Dropdown, Input } from "@nextui-org/react";
import { SearchIcon } from "../NavBar/SearchIcon";
import { Button } from "@nextui-org/react";
import "./SearchBar.css";

export function SearchBar({ funcOnChange, fncOnClc }) {
  return (
    <Navbar.Content
      className="nvbr-cntnt"
      css={{
        "@xsMax": {
          w: "100%",
          jc: "space-between",
        },
      }}
    >
      <Navbar.Item
        css={{
          "@xsMax": {
            w: "100%",
            jc: "center",
          },
        }}
      >
        <Input
          className="input-bar"
          clearable
          contentLeft={
            <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
          }
          contentLeftStyling={false}
          css={{
            w: "100%",
            "@xsMax": {
              mw: "300px",
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          contentRight={
            <Button aria-label="search" auto onClick={fncOnClc}>
              Search
            </Button>
          }
          placeholder="Keyword..."
          onChange={funcOnChange}
          aria-label="input"
        />
      </Navbar.Item>
    </Navbar.Content>
  );
}
