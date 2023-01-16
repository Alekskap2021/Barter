import { useState } from "react";
import styled from "styled-components";
import { ResponsiveContainer } from "../../../components/responsive";
import { media } from "../../../global-style";

//* To-do: set types

const HeadingTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  transition: 500ms;
  border-bottom: 3px solid transparent;
  padding: 10px;
  color: #3e4149;
  text-align: center;
`;

const HeadingItem = styled.div<{ isActive?: boolean }>`
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  height: 125px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isActive }) => (isActive ? "var(--default-yellow)" : "white")};
  transition: 500ms;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
  ${media.mobile} {
    width: 35;
    height: 35;
  }
  &:hover + ${HeadingTitle} {
    border-bottom: 3px solid var(--default-yellow);
  }

  ::after {
    ${({ isActive }) => {
      return isActive
        ? `
    content: " ";
    position: absolute;
    margin: 0 auto;
    bottom: -74px;
    width: 0px;
    height: 0px;
    margin-top: -15px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #868686;
    `
        : "";
    }}
  }
`;

const HeadingsWrapper = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: row;
  gap: 15px;
  align-items: center;
  padding-bottom: 35px;
`;

const HeadingItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingCategoriesWrapper = styled.div`
  flex-flow: wrap;
  position: relative;
  bottom: 5px;
  max-height: 200px;
  flex-wrap: wrap;
  line-height: 20px;
  border: 1px solid #868686;
  border-radius: 10px 10px 60px 60px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
`;

const CategorySelector = styled.div``;

const HeadingCategoryItem = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const HeadingItemComp = ({ item, onClick, isActive }: any) => {
  const categoryItemHandleClick = () => {
    onClick();
  };

  return (
    <HeadingItemWrapper>
      <HeadingItem onClick={categoryItemHandleClick} isActive={isActive}>
        <img src={item.img} />
      </HeadingItem>
      <HeadingTitle>{item.title}</HeadingTitle>
    </HeadingItemWrapper>
  );
};

export const HeadingCategories = ({ data, width }: any) => {
  const renderCategories = data.map((item: any) => {
    return (
      <HeadingCategoryItem key={item.id}>
        <li>{item}</li>
      </HeadingCategoryItem>
    );
  });

  return (
    <ul>
      <HeadingCategoriesWrapper style={{ width: width }}>
        {renderCategories}
      </HeadingCategoriesWrapper>
    </ul>
  );
};

export const HeadingsUnwrapped = ({ data }: any) => {
  const [openSubs, setOpenSubs] = useState<{ item: any; itemIndex: number } | undefined>(undefined);

  const handleItemClick = (item: any, itemIndex: number) => {
    setOpenSubs((prevState) => {
      if (prevState?.itemIndex == itemIndex) return undefined;
      return { item, itemIndex };
    });
  };
  //* Текущий размер айтема в десктопной версии, фича с отображением подкатегорий не будет работать если ширина будет указана неправильно.
  const itemWidth = 168;

  return (
    <ResponsiveContainer>
      {(sizes) => {
        const renderedItems: any[] = data.map((item: any, index: number) => (
          <HeadingItemComp
            key={index}
            item={item}
            onClick={() => handleItemClick(item, index)}
            isActive={openSubs?.itemIndex === index}
          />
        ));
        if (!sizes || !openSubs) return <HeadingsWrapper>{renderedItems}</HeadingsWrapper>;

        const openCat = (
          <HeadingCategories width={sizes.width - 20} data={openSubs.item.categories} />
        );
        const rowLength = Math.ceil(sizes.width / itemWidth);
        const insertAtRow = Math.floor(openSubs.itemIndex / rowLength) + 1;
        const insertAfterItemIndex = insertAtRow * rowLength;

        //* Делит массив из отображаемых айтемов на 2 части для того чтобы рендерить компонент с категориями между ними без нарушения разметки.

        const part1 = renderedItems.slice(0, insertAfterItemIndex);
        const part2 = renderedItems.slice(insertAfterItemIndex);

        return (
          <>
            <HeadingsWrapper>{part1}</HeadingsWrapper>
            <CategorySelector />
            {openCat}
            <HeadingsWrapper>{part2}</HeadingsWrapper>
          </>
        );
      }}
    </ResponsiveContainer>
  );
};
