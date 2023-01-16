import styled from "styled-components";
import { DefaultSelect } from "../../../global-style/UI-kit";
import { SelectionPrice } from "./selections-box";

const Flex = styled.div`
  display: flex;
  margin-bottom: 20px;
  div:first-child {
    margin-right: 20px;
  }
`;

export const data1 = [
  {
    title: "Дом и сад",
  },
  {
    title: "Детский мир",
  },
  {
    title: "Животные",
  },
  {
    title: "Транспорт",
  },
  {
    title: "Работа",
  },
  {
    title: "Услуги",
  },
];

const data2 = [
  {
    title: "Самые догорогие",
  },
  {
    title: "Самые дешевые",
  },
  {
    title: "Самые новые",
  },
  {
    title: "Рекомендованные",
  },
  {
    title: "Отдам даром",
  },
];
export const Selections = () => {
  return (
    <>
      <Flex>
        <DefaultSelect
          title={"Выберите категорию"}
          placeholder={"Выберите категорию"}
          maxWidth={"440px"}
          mockData={data1}
        />
        <SelectionPrice />
      </Flex>

      <DefaultSelect
        title={"Сортировать по"}
        placeholder={"Рекомендованное вам"}
        maxWidth={"440px"}
        mockData={data2}
      />
    </>
  );
};
