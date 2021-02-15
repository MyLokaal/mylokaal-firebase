import Cards from "./Cards";

const LocalSellers = () => {
  const data = {
    title: "Local Sellers",
    description:
      "No matter what skill or trade you have to offer, MyLokaal makes it simple and secure to sell online. Take full control of your products, prices and client communication.",
    cards: [
      {
        title: "Food",
        alt: "Jam with strawberries.",
        src:
          "https://images.unsplash.com/photo-1500912239908-4ee48acb3a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        text:
          "Sell your fresh baked goods, prdouce or home-baked meals online. MyLokaal gives you the tools to earn money from home using your culinary skills.",
      },
      {
        title: "Products",
        alt: "Handmade organic soap.",
        src:
          "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80",
        text:
          "Retail your home-made products online. MyLokaal expands your reach locally, regionally and internationally.",
      },
      {
        title: "Services",
        alt: "Maintenance tools.",
        src: "/images/service.jpg",
        text:
          "Offer your services online. Whether you work remotely from home or on-call, MyLokaal connects you with customers nearby.",
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
