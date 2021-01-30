import { useIntl } from "react-intl";

const useTranslation = (id) => {
  const { formatMessage } = useIntl();

  return formatMessage({ id });
};

export default useTranslation;
