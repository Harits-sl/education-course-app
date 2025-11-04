import { FormattedNumber, IntlProvider } from 'react-intl';

export default function Price(props) {
  const { value } = props;

  let shortValue = value;
  let suffix = '';

  if (value >= 1_000_000) {
    shortValue = value / 1_000_000;
    suffix = 'M';
  } else if (value >= 1_000) {
    shortValue = value / 1_000;
    suffix = 'k';
  }

  return (
    <>
      <div className="text-primary font-poppins font-semibold text-xl md:text-2xl">
        <IntlProvider
          locale="id-ID"
          defaultLocale="en"
        >
          <FormattedNumber
            value={shortValue}
            maximumFractionDigits={0}
            style="currency"
            currency="IDR"
          />
        </IntlProvider>
        {suffix}
      </div>
    </>
  );
}
