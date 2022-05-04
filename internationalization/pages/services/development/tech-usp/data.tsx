import {
  HeaderImg,
  ESGImg,
  IconEnvironmental,
  IconSocial,
  IconGovernance,
  DeverseImage,
  MakerImage
} from 'content/services/ValuationAnalyses/assets';
import { mapPlaceholder } from 'components/modules/Card/MapCard/assets';
import developmentTechUSPI18n from './i18n';
import { Paragraph } from 'components/atoms';
import { ContentContainer } from 'components/modules/Card/TabContent/style';

export const developmentTechUSPData = t => {
  const data = {
    metaTitle: t(developmentTechUSPI18n.metaTitle.id),
    metaDescription: t(developmentTechUSPI18n.metaDescription.id),
    movingHeader_title: t(developmentTechUSPI18n.movingHeader_title.id),
    movingHeader_description: t(developmentTechUSPI18n.movingHeader_description.id),
    boxHeaderTitle_1: t(developmentTechUSPI18n.boxHeaderTitle_1.id),
    boxHeaderSubTitle_1: t(developmentTechUSPI18n.boxHeaderSubTitle_1.id),
    boxHeaderTitle_2: t(developmentTechUSPI18n.boxHeaderTitle_2.id),
    boxHeaderSubTitle_2: t(developmentTechUSPI18n.boxHeaderSubTitle_2.id),
    boxHeaderSubTitle_3: t(developmentTechUSPI18n.boxHeaderSubTitle_3.id),
    boxHeaderTitle_4: t(developmentTechUSPI18n.boxHeaderTitle_4.id),
    boxHeaderSubTitle_4: t(developmentTechUSPI18n.boxHeaderSubTitle_4.id),
    boxHeaderTitle_3: t(developmentTechUSPI18n.boxHeaderTitle_3.id),

    teaserFullOne_heading: t(developmentTechUSPI18n.teaserFullOne_heading.id),
    teaserFullOne_paragraph: t(developmentTechUSPI18n.teaserFullOne_paragraph.id),

    teaserFullTwo_heading: t(developmentTechUSPI18n.teaserFullTwo_heading.id),
    teaserFullTwo_paragraph: t(developmentTechUSPI18n.teaserFullTwo_paragraph.id),

    teaserFullThree_heading: t(developmentTechUSPI18n.teaserFullThree_heading.id),
    teaserFullThree_paragraph: t(developmentTechUSPI18n.teaserFullThree_paragraph.id),

    teaserFullFour_heading: t(developmentTechUSPI18n.teaserFullFour_heading.id),
    teaserFullFour_paragraph: t(developmentTechUSPI18n.teaserFullFour_paragraph.id),

    carouselFullContent_0: [
      {
        title: t(developmentTechUSPI18n.carouselFullContent_0_Title.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_0_SubTitle.id),
        image: DeverseImage
      }
    ],

    carouselFullContent_1: [
      {
        title: t(developmentTechUSPI18n.carouselFullContent_1_FirstTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_1_FirstSubTitle.id),
        image: HeaderImg
      },
      {
        title: t(developmentTechUSPI18n.carouselFullContent_1_SecondtTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_1_SecondSubTitle.id),
        image: ESGImg
      },
      {
        title: t(developmentTechUSPI18n.carouselFullContent_1_ThirdTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_1_ThirdSubTitle.id),
        image: DeverseImage
      },
      {
        title: t(developmentTechUSPI18n.carouselFullContent_1_FourthtTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_1_FourthtSubTitle.id),
        image: MakerImage
      }
    ],

    carouselFullContent_2: [
      {
        title: t(developmentTechUSPI18n.carouselFullContent_2_FirstTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_2_FirstSubTitle.id),
        image: IconGovernance
      },
      {
        title: t(developmentTechUSPI18n.carouselFullContent_2_SecondTitle.id),
        subTitle: t(developmentTechUSPI18n.carouselFullContent_2_SecondSubTitle.id),
        image: IconEnvironmental
      }
    ],

    tabPaneItems: [
      { title: t(developmentTechUSPI18n.tabPaneItems_1_Title.id), image: mapPlaceholder },
      { title: t(developmentTechUSPI18n.tabPaneItems_2_Title.id), image: IconSocial },
      { title: t(developmentTechUSPI18n.tabPaneItems_2_Title.id), image: IconGovernance }
    ],
    cardIconData: [
      {
        title: t(developmentTechUSPI18n.cardIconData_1_title.id),
        description: t(developmentTechUSPI18n.cardIconData_1_description.id)
      },
      {
        title: t(developmentTechUSPI18n.cardIconData_2_title.id),
        description: t(developmentTechUSPI18n.cardIconData_2_description.id)
      },
      {
        title: t(developmentTechUSPI18n.cardIconData_3_title.id),
        description: t(developmentTechUSPI18n.cardIconData_3_description.id)
      }
    ],
    tabContent: [
      {
        title: <Paragraph type={3}>{t(developmentTechUSPI18n.tabContent_1_Link.id)}</Paragraph>,
        content: (
          <ContentContainer>
            {' '}
            <Paragraph type={1} color={'#666'}>
              {t(developmentTechUSPI18n.tabContent_1_Title.id)}
            </Paragraph>
            <Paragraph type={2} color={'#8f96a3'}>
              {t(developmentTechUSPI18n.tabContent_1_SubTitle.id)}
            </Paragraph>
          </ContentContainer>
        )
      },
      {
        title: <Paragraph type={3}>{t(developmentTechUSPI18n.tabContent_2_Link.id)}</Paragraph>,
        content: (
          <ContentContainer>
            <Paragraph type={1} color={'#666'}>
              {t(developmentTechUSPI18n.tabContent_1_Title.id)}
            </Paragraph>
            <Paragraph type={2} color={'#8f96a3'}>
              {t(developmentTechUSPI18n.tabContent_2_SubTitle.id)}
            </Paragraph>
          </ContentContainer>
        )
      },
      {
        title: <Paragraph type={3}>{t(developmentTechUSPI18n.tabContent_3_Link.id)}</Paragraph>,
        content: (
          <ContentContainer>
            <Paragraph type={1} color={'#666'}>
              {t(developmentTechUSPI18n.tabContent_1_Title.id)}
            </Paragraph>{' '}
            <Paragraph type={2} color={'#8f96a3'}>
              {t(developmentTechUSPI18n.tabContent_3_SubTitle.id)}
            </Paragraph>
          </ContentContainer>
        )
      },
      {
        title: <Paragraph type={3}>{t(developmentTechUSPI18n.tabContent_4_Link.id)}</Paragraph>,
        content: (
          <ContentContainer>
            <Paragraph type={1} color={'#666'}>
              {t(developmentTechUSPI18n.tabContent_1_Title.id)}
            </Paragraph>{' '}
            <Paragraph type={2} color={'#8f96a3'}>
              {t(developmentTechUSPI18n.tabContent_4_SubTitle.id)}
            </Paragraph>
          </ContentContainer>
        )
      },
      {
        title: <Paragraph type={3}>{t(developmentTechUSPI18n.tabContent_5_Link.id)}</Paragraph>,
        content: (
          <ContentContainer>
            <Paragraph type={1} color={'#666'}>
              {t(developmentTechUSPI18n.tabContent_1_Title.id)}
            </Paragraph>{' '}
            <Paragraph type={2} color={'#8f96a3'}>
              {t(developmentTechUSPI18n.tabContent_5_SubTitle.id)}
            </Paragraph>
          </ContentContainer>
        )
      }
    ]
  };

  return data;
};
