import { Footer } from "../../src/components/footer/footer";
import { Header } from "../../src/components/header/desktopHeader";
import { DefaultBackground, UIBtn } from "../../src/global-style/style-variables";
import { ButtonAbsolute } from "../../src/views/authorization/mobile-footer-btn";
import ItemCardPage from "../../src/views/card-page/card-page";
import { CardPageMobile } from "../../src/views/card-page/mobile";

const CardPage = ({ deviceType, product }) => {
  console.log(product, "product");
  return (
    <>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        {deviceType !== "mobile" ? (
          <ItemCardPage data={product} deviceType={deviceType} />
        ) : (
          <CardPageMobile data={product} />
        )}
        {deviceType !== "mobile" ? (
          <Footer />
        ) : (
          <ButtonAbsolute position={"fixed"} imgVisible={false}>
            <UIBtn link={"/card-page/trade"} text={"Предложить обмен"} margin={"8px 0px"} />
            <UIBtn
              link={"/card-page/trade"}
              background={"white"}
              text={"Купить"}
              border={" 2px solid #FDCE05;"}
            />
          </ButtonAbsolute>
        )}
      </DefaultBackground>
    </>
  );
};

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

  const { id } = context.params;

  const res = await fetch(`http://barter.a-lux.dev/api/products/${id}`);
  const product = await res.json();

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
      product: product.data,
    },
  };
}

export default CardPage;
