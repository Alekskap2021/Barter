import { useState } from "react";
import styled, { css } from "styled-components";
import { media } from "../../global-style";
import {
  Container,
  DefaultWrapper,
  FlexOnlyCenter,
  JC_SB,
  UIBtn,
} from "../../global-style/style-variables";
import {
  DefaultBtn,
  DefaultCheckBox,
  DefaultInput,
  DefaultSelect,
  UIBackToPage,
  UIGridColumn,
} from "../../global-style/UI-kit";
import { ButtonAbsolute } from "../authorization/mobile-footer-btn";
import { CameraSvg } from "../main/svg";

const data1 = [
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

const Strana = [
  {
    title: "Казахстан",
  },
  {
    title: "Украина",
  },
  {
    title: "Таджикистан",
  },
  {
    title: "Узбекистан",
  },
  {
    title: "Китай",
  },
  {
    title: "Япония",
  },
];

const sostoyanie = [
  {
    title: "Новое",
  },
  {
    title: "Б/у",
  },
  {
    title: "Хлам",
  },
];

const country = [
  {
    title: "Караганда",
  },
  {
    title: "Алматы",
  },
  {
    title: "Астана",
  },
];

export const DefaultTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 30px;
  ${media.mobile} {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    margin: 8px 0px;
  }
`;

const CreateWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  ${media.mobile} {
    margin-bottom: unset;
    box-shadow: unset;
    border-radius: unset;
    padding: 8px 8px 16px;
  }
`;

export const CreateTitle = styled.h3<{ marginB?: any }>`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${({ marginB }) => (marginB ? marginB : "20px")};
  ${media.mobile} {
    margin-bottom: ${({ marginB }) => (marginB ? marginB : "16px")};
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #868686;
`;

const PhotoBox = styled.div`
  margin-top: 40px;
  ${media.mobile} {
    margin-top: 16px;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  ${media.mobile} {
    div:not(:first-child) {
      display: none;
    }
    grid-template-columns: 1fr;
  }
`;

const PhotoItem = styled.div<{ primary?: any }>`
  border-radius: 8px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ primary }) => (primary ? "rgba(253, 206, 5, 0.5);" : "#E7E7E7")};
`;

//  Второй блок

const TextArea = styled.textarea`
  padding: 20px;
  background: #e7e7e7;
  width: 100%;
  margin-top: 8px;
  height: 471px;
  border-radius: 8px;
  resize: none;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #373538;
  }
  ${media.mobile} {
    height: 241px;
    padding: 12px;
    ::placeholder {
      color: #868686;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const MobileWrapper = styled.div`
  ${media.mobile} {
    margin-bottom: 16px;
    background: white;
    box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
      4px 4px 16px rgba(172, 172, 172, 0.15);
    border-radius: 30px;
    overflow: hidden;
  }
`;

const TextAreaLimit = styled(JC_SB)`
  margin: 10px 0px 30px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #868686;
  }
`;

const CheckBoxWrapper = styled.div`
  margin-top: 24.5px;
`;
export const DubleInput = styled.div<{ marginT?: any }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-top: ${({ marginT }) => marginT};
  ${media.mobile} {
    grid-gap: 9px;
  }
`;

const Warn = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 15px;
  color: #e24949;
`;
// Второй блок конец

// Третий блок

const AutoRenewal = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #868686;
  ${media.mobile} {
    font-size: 12px;
    line-height: 15px;
  }
`;

const ContactGrid = styled(UIGridColumn)`
  gap: 20px 60px;
  ${media.mobile} {
    gap: 16px;
  }
`;

const ContactBtns = styled(FlexOnlyCenter)`
  margin-top: 38px;
  button {
    margin: 0px 10px;
  }

  ${media.mobile} {
    margin-top: unset;
    button {
      margin: 8px 0px;
    }
  }
`;

const Wrapper = styled(DefaultWrapper)`
  ${media.mobile} {
    & > div:last-child {
      box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25),
        -4px 4px 16px rgba(172, 172, 172, 0.15), 4px 4px 16px rgba(172, 172, 172, 0.15);
      border-radius: 30px;

      h3 {
        text-align: center;
      }
    }
    padding: 19px 0px 180px;
  }
`;

const MarginTopMobile = css`
  ${media.mobile} {
    > :last-child {
      margin-top: 16px;
    }
  }
`;
// Третий блок конец
export const CreateAdPage = ({ deviceType }) => {
  const [textAreaValue, setTextAreaValue] = useState("0");

  const TextAreaValue = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <>
      <Container>
        <Wrapper>
          {deviceType === "mobile" && <UIBackToPage href={"/"} text={"Вернуться на главную "} />}
          <MobileWrapper>
            <DefaultTitle>Создать объявление</DefaultTitle>
            <CreateWrapper>
              <CreateTitle>Опишите в подробностях</CreateTitle>

              <UIGridColumn styles={MarginTopMobile}>
                <DefaultInput
                  labelText={"Укажите название*"}
                  placeholder={"Например, Macbook Air"}
                />
                <DefaultSelect
                  title={"Категория*"}
                  placeholder={"Выберите категорию"}
                  mockData={data1}
                />
              </UIGridColumn>
              <PhotoBox>
                <CreateTitle marginB={"8px"}>Фото</CreateTitle>
                {deviceType !== "mobile" && (
                  <SubTitle>
                    Первое фото будет на обложке объявления. Перетащите, чтобы изменить порядок.
                  </SubTitle>
                )}
                <PhotoGrid>
                  <PhotoItem primary>Добавить фото</PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                  <PhotoItem>
                    <CameraSvg />
                  </PhotoItem>
                </PhotoGrid>
              </PhotoBox>
            </CreateWrapper>
            {/* Втроой блок */}
            <CreateWrapper>
              <UIGridColumn>
                <div>
                  {deviceType !== "mobile" && <CreateTitle>Описание*</CreateTitle>}
                  <SubTitle>Укажите название*</SubTitle>
                  <TextArea
                    onChange={TextAreaValue}
                    placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
                  />
                  <TextAreaLimit>
                    <p>
                      Напишите еще{" "}
                      {80 - textAreaValue.length <= 0 ? "0" : 80 - textAreaValue.length} символов
                    </p>
                    <p>{textAreaValue.length}/9000</p>
                  </TextAreaLimit>
                  <DefaultInput
                    labelText={"Предложите цену"}
                    placeholder={"Напишите стоимость вашего  товара"}
                  />
                  <CheckBoxWrapper>
                    <DefaultCheckBox labelText={"Только обмен"} />
                    <DefaultCheckBox labelText={"Только продажа"} />
                    <DefaultCheckBox labelText={"Обмен или продажа"} />
                  </CheckBoxWrapper>
                </div>
                <div>
                  <CreateTitle>Габариты*</CreateTitle>
                  <DubleInput>
                    <DefaultInput labelText={"Длина*"} placeholder={"0 м"} />
                    <DefaultInput labelText={"Ширина*"} placeholder={"0 м"} />
                  </DubleInput>
                  <DubleInput marginT={"20px"}>
                    <DefaultInput labelText={"Высота*"} placeholder={"0 м"} />
                    <DefaultInput labelText={"Вес*"} placeholder={"0 кг"} />
                  </DubleInput>
                  <CheckBoxWrapper>
                    <DefaultCheckBox color={"red"} labelText={"ОСТОРОЖНО СТЕКЛО"}></DefaultCheckBox>
                    <DefaultCheckBox labelText={"Международная доставка"} />
                    <DefaultCheckBox labelText={"Этот товар не является запрещенным"} />
                  </CheckBoxWrapper>
                  <DefaultSelect
                    title={"Состояние товара*"}
                    placeholder={"Новое"}
                    marginG={"20px 0px 30px"}
                    mockData={sostoyanie}
                  />
                  <DefaultSelect
                    title={"Местоположение товара*"}
                    placeholder={"Выберите страну"}
                    mockData={Strana}
                  />
                  <DefaultSelect
                    placeholder={"Выберите город"}
                    marginG={"20px 0px"}
                    mockData={country}
                  />
                  <DefaultInput
                    labelText={"Точное название улицы*"}
                    placeholder={"Напишите название вашей улицы"}
                  />
                  <DubleInput marginT={"20px"}>
                    <DefaultInput labelText={"Номер дома"} placeholder={"№ дома"} />
                    <DefaultInput labelText={"Номер квартиры"} placeholder={"№ кВ"} />
                  </DubleInput>
                </div>
              </UIGridColumn>
            </CreateWrapper>
          </MobileWrapper>
          {/* Втроой блок конец  */}
          {/* Третий блок */}
          <CreateWrapper>
            <CreateTitle>Контактная информация</CreateTitle>
            <ContactGrid>
              <DefaultInput labelText={"Контактное лицо*"} placeholder={"Ваше Имя"} />
              <DefaultInput labelText={"Номер телефона"} placeholder={"Напишите номер телефона"} />
              <DefaultInput labelText={"Email-адрес"} placeholder={"Напишите Вашу почту"} />
              <div>
                <DefaultCheckBox labelText={"Автопродление"} />
                <AutoRenewal>
                  При клике на кнопку «Автопродление», объявление включает функцию автоматического
                  продления каждые 30 дней
                </AutoRenewal>
              </div>
            </ContactGrid>
            <ContactBtns>
              {deviceType !== "mobile" ? (
                <>
                  <DefaultBtn
                    border={"2px solid var(--default-yellow)"}
                    background={"transparent"}
                    text={"Предосмотр"}
                  />
                  <DefaultBtn text={"Опубликовать"} />
                </>
              ) : (
                <ButtonAbsolute position={"fixed"} imgVisible={false}>
                  <UIBtn text={"Опубликовать"} />
                  <UIBtn background={"white"} text={"Предосмотр"} border={" 2px solid #FDCE05;"} />
                </ButtonAbsolute>
              )}
            </ContactBtns>
          </CreateWrapper>
          {/* Третий блок конец*/}
        </Wrapper>
      </Container>
    </>
  );
};
