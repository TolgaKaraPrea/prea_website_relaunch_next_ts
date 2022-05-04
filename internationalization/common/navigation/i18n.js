import { defineMessages } from 'react-intl';

const scopeAssetclasses = 'common.navigation.assetclasses';
const scopeServices = 'common.navigation.services';
const scopeServicesPages = 'common.navigation.services.suppages';

const navigationI18n = defineMessages({
  living: {
    id: `${scopeAssetclasses}.living`,
    defaultMessage: 'Wohnen'
  },
  coworking: {
    id: `${scopeAssetclasses}.coworking`,
    defaultMessage: 'Co-Working'
  },
  dataCenter: {
    id: `${scopeAssetclasses}.data-center`,
    defaultMessage: 'Data Center'
  },
  healthcare: {
    id: `${scopeAssetclasses}.healthcare`,
    defaultMessage: 'Gesundheitswesen'
  },
  hotel: {
    id: `${scopeAssetclasses}.hotel`,
    defaultMessage: 'Hotel'
  },
  office: {
    id: `${scopeAssetclasses}.office`,
    defaultMessage: 'Office'
  },
  logistics: {
    id: `${scopeAssetclasses}.logistics`,
    defaultMessage: 'Logistik'
  },
  retail: {
    id: `${scopeAssetclasses}.retail`,
    defaultMessage: 'Einzelhandel'
  },
  buildingland: {
    id: `${scopeAssetclasses}.buildingland`,
    defaultMessage: 'Bauland'
  },

  investmentTransaction: {
    id: `${scopeServicesPages}.investment-transaction`,
    defaultMessage: 'Investment & Transaktion'
  },
  financing: {
    id: `${scopeServicesPages}.financing`,
    defaultMessage: 'Finanzierung'
  },
  valuationAnalyses: {
    id: `${scopeServicesPages}.valuation-analyses`,
    defaultMessage: 'Bewertung & Analysen'
  },
  development: {
    id: `${scopeServicesPages}.development`,
    defaultMessage: 'Projektentwicklung'
  },
  architecture: {
    id: `${scopeServicesPages}.architecture`,
    defaultMessage: 'Architektur'
  }

});

export default navigationI18n;
