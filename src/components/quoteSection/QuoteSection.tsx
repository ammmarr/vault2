import style from "./index.module.scss";
const QuoteSection = () => {
  return (
    <div className={style.container}>
      <p>
        “Vault will become an example of the responsible business model by doing
        business with kindness, profit and bringing practical and long-term
        values to customers, employees, partners, the community for the
        environment and for shareholders ”
      </p>
      <span>Michael Anthony, CEO & Founder Vault</span>
    </div>
  );
};

export default QuoteSection;
