import Cards from "./cards";

const LocalSellers = () => {
  const data = {
    title: "Local Sellers",
    description:
      "No matter what skill or trade you have to offer, MyLokaal makes it simple and secure to sell online. You have full control of your products, prices and communication.",
    cards: [
      {
        title: "Food",
        alt: "Jam with strawberries.",
        src:
          "https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "From baked goods, prepped home meals for pickup or private in-home cooks, MyLokaal gives you the tools to start earning money using your culinary skills.",
      },
      {
        title: "Services",
        alt: "Maintenance tools.",
        src:
          "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
        text:
          "Whether you work remotely from home or provide an on-call serve, MyLokaal connects you with qualified customers with more repeat business.",
      },
      {
        title: "Products",
        alt: "Handmade organic soap.",
        src:
          "https://images.unsplash.com/photo-1605264964528-06403738d6dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "Sell original home-made products using MyLokaal to expand your reach locally, regionally and internationally!",
      },
    ],
  };
  return (
    <Cards
      title={data.title}
      description={data.description}
      cards={data.cards}
      borderRadius="full"
      bg="blue.800"
      textColor="white"
    />
  );
};

export default LocalSellers;
