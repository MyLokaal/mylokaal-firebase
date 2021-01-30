import { useState } from "react";
import { useRouter } from "next/router";
import { Select, Box } from "@chakra-ui/core";

export const LANGUAGES = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "Nederlandse",
    value: "nl-NL",
  },
  {
    label: "Georgian",
    value: "ka-GE",
  },
];

const FooterLangControl = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const parsedLocale = locale ? locale.split("-") : "en-US".split("-");

  const [lang, setLang] = useState(parsedLocale[0] || DEFAULT_LANGUAGE_CODE);

  const switchLocale = (newLang) => {
    setLang(newLang);
    router.push(asPath, asPath, {
      locale: `${newLang.toLowerCase()}`,
    });
  };

  return (
    <Box mr="3">
      <form>
        <fieldset>
          {/* <label htmlFor="language">Language</label> */}
          <div>
            <Select
              id="language"
              value={lang}
              onChange={(e) => switchLocale(e.currentTarget.value, location)}
            >
              {LANGUAGES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </Select>
          </div>
        </fieldset>
      </form>
    </Box>
  );
};

export default FooterLangControl;
