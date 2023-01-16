import Image, { ImageProps } from "next/image";
import { useCallback, useState } from "react";
import styled from "styled-components";

import chevronDownSvg from "./chevron-down.svg";
import checkboxCheckedSvg from "./checkbox-checked.svg";
import checkboxUnCheckedSvg from "./checkbox-unchecked.svg";
import mapPinSvg from "./map-pin.svg";

import { formatPrice } from "./utils";

import defaultImg from "../../views/main/images-default/default-1.png";
import defaultImg2 from "../../views/main/images-default/default-2.png";
import defaultImg3 from "../../views/main/images-default/default-3.png";
import { DefaultArrowSvg } from "../../components/default-svg";
import { AliCenter, JC_SB } from "../../global-style/style-variables";

const FixedImageWrapper = styled.div`
  display: block;
  border-radius: 3px;
  overflow: hidden;
`;

type FixedImageProps = {
  src: ImageProps["src"];
  width: number;
  height: number;
  alt?: any;
};
const FixedImage = ({ src, width, height, alt }: FixedImageProps) => (
  <FixedImageWrapper style={{ minWidth: width, minHeight: height, width, height }}>
    <Image src={src} alt={alt} width={width} height={height} />
  </FixedImageWrapper>
);

const ExchangeItemCell = styled.td``;

const ExchangeItemRow = styled.tr`
  border-top: 1px solid #868686;
  height: 100px;
`;

const ExchangeItemName = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #373538;
`;

const ExchangeItemPrice = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #373538;
  white-space: nowrap;
`;

type ExchangeItemProps = {
  isChecked?: boolean;
  image: string;
  name: string;
  price: number;
  onClick?: () => void;
};

const ExchangeItem = ({ isChecked, image, name, price, onClick }: ExchangeItemProps) => (
  <ExchangeItemRow onClick={onClick}>
    <ExchangeItemCell>
      <FixedImage
        src={isChecked ? checkboxCheckedSvg : checkboxUnCheckedSvg}
        width={24}
        height={24}
        alt=""
      />
    </ExchangeItemCell>
    <ExchangeItemCell>
      <FixedImage src={image} width={60} height={60} />
    </ExchangeItemCell>
    <ExchangeItemCell>
      <ExchangeItemName>{name}</ExchangeItemName>
    </ExchangeItemCell>
    <ExchangeItemCell>
      <ExchangeItemPrice>{formatPrice(price)} ₸</ExchangeItemPrice>
    </ExchangeItemCell>
  </ExchangeItemRow>
);

const ExchangeItemListTable = styled.table`
  border: none;
  border-collapse: collapse;

  td {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
  td:first-child {
    padding-left: 0;
  }
  td:last-child {
    padding-right: 0;
  }
`;

const ExchangeItemListTableBody = styled.tbody``;

const ExchangeItemList = ({ children }: any) => (
  <ExchangeItemListTable>
    <ExchangeItemListTableBody>{children}</ExchangeItemListTableBody>
  </ExchangeItemListTable>
);

// ------------------------------

const CheckListItemName = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #373538;
  margin-left: 10px;
`;

const CheckListItemRow = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 20px;
  }
`;

type CheckListItemProps = {
  isChecked?: boolean;
  name: string;
  onClick?: () => void;
};

const CheckListItem = ({ isChecked, name, onClick }: CheckListItemProps) => (
  <CheckListItemRow onClick={onClick}>
    <FixedImage
      src={isChecked ? checkboxCheckedSvg : checkboxUnCheckedSvg}
      width={24}
      height={24}
      alt=""
    />
    <CheckListItemName>{name}</CheckListItemName>
  </CheckListItemRow>
);

type CheckListProps = {
  selectedKeys: string[];
  /** key -> label */
  options: { [key: string]: string };
  onSelectionChange?: (selectedKeys: string[]) => void;
};

const CheckList = ({ selectedKeys, options, onSelectionChange }: CheckListProps) => {
  return (
    <>
      {Object.entries(options).map(([key, text]) => (
        <CheckListItem
          key={key}
          name={text}
          isChecked={selectedKeys.includes(key)}
          onClick={() => {
            if (!onSelectionChange) return;
            if (selectedKeys.includes(key)) {
              // was checked
              onSelectionChange(selectedKeys.filter((x) => x !== key));
            } else {
              onSelectionChange([...selectedKeys, key]);
            }
          }}
        />
      ))}
    </>
  );
};

// -------------------------------------

const CategoryHeaderLabel = styled(JC_SB)`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #373538;

  cursor: pointer;
`;

const CategoryContainer = styled.div`
  margin-bottom: 20px;
`;

const CategoryHeaderLabelText = styled.div`
  vertical-align: top;
  line-height: 28px;
`;

const CategoryContent = styled.div`
  margin-top: 20px;
`;

type CategoryProps = {
  title: any;
  children: any;
  noToggle?: boolean;
};

const Category = ({ title, children, noToggle }: CategoryProps) => {
  const [isOpen, setOpen] = useState(noToggle || false);

  const toggleOpen = useCallback(() => {
    if (noToggle) return;
    setOpen((prev) => !prev);
  }, [noToggle]);

  return (
    <CategoryContainer>
      <CategoryHeaderLabel onClick={toggleOpen}>
        {(noToggle && typeof title !== "string" && title) || (
          <CategoryHeaderLabelText>{title}</CategoryHeaderLabelText>
        )}

        {!noToggle && <DefaultArrowSvg />}
      </CategoryHeaderLabel>
      {isOpen && <CategoryContent>{children}</CategoryContent>}
    </CategoryContainer>
  );
};

// --------------------------------

const DeliveryPathRow = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DeliveryPathAddress = styled.div`
  margin-left: 10px;
`;

const DeliveryPathContainer = styled.div`
  position: relative;
`;

const DeliveryPathLine = styled.div`
  position: absolute;
  border-right: 2px dotted #373538;
  left: 0;
  top: 25px;
  bottom: 25px;
  width: 13px;
`;

type DeliveryPathProps = {
  from: string;
  to: string;
};

export const DeliveryPath = ({ from, to }: DeliveryPathProps) => (
  <DeliveryPathContainer>
    <DeliveryPathLine />
    <DeliveryPathRow>
      <FixedImage src={mapPinSvg} width={24} height={24} />
      <DeliveryPathAddress>{from}</DeliveryPathAddress>
    </DeliveryPathRow>
    <DeliveryPathRow>
      <FixedImage src={mapPinSvg} width={24} height={24} />
      <DeliveryPathAddress>{to}</DeliveryPathAddress>
    </DeliveryPathRow>
  </DeliveryPathContainer>
);

// --------------------------------

export function ItemCardPageDelivery() {
  return (
    <div>
      <Category title="Выберите товар для обмена">
        <ExchangeItemList>
          <ExchangeItem isChecked image={defaultImg.src} name="Аллюминивая кружка" price={80000} />
          <ExchangeItem
            image={defaultImg2.src}
            name="Книги Л.Н. Толстого 4 тома, 2 книги Абая К."
            price={80000}
          />
          <ExchangeItem isChecked image={defaultImg3.src} name="Аллюминивая кружка" price={80000} />
        </ExchangeItemList>
      </Category>
      <Category title="Кто платит за доставку">
        <CheckList
          selectedKeys={["myself"]}
          options={{
            myself: "Оплачиваю сам",
            half: "50 / 50",
            owner: "Оплачивает собственник",
            eachself: "Каждый за себя",
            contract: "Оплата по договоренности",
          }}
        />
      </Category>
      <Category
        title={
          <>
            <div>Стоимость доставки: </div>
            <div>{formatPrice(80000)} ₸</div>
          </>
        }
        noToggle
      >
        <DeliveryPath from="Гагарина 29, кв 8" to="Garden st, 32, 76543 ap" />
      </Category>
    </div>
  );
}
