import { isAfter, isValid, parse } from 'date-fns';

const utils = {
  parseDate: (date) => parse(date, 'dd/MM/yyyy', new Date())
};

const required = (v) => !!v || 'O campo é obrigatório.';
const isValidDate = (date) =>
  (!!date && isValid(utils.parseDate(date))) || 'Data inválida.';

const rules = {
  name: { required },
  start_date: {
    required,
    isValidDate
  },
  end_date: {
    required,
    isValidDate,
    isAfterStartDate(startDate) {
      return (endDate) =>
        (!!startDate &&
          !!endDate &&
          isAfter(utils.parseDate(endDate), utils.parseDate(startDate))) ||
        'Data de término deve ser posterior a data de início';
    }
  },
  value: {
    required
  },
  participants: {
    atLeastOne: (array) =>
      (!!array && array.length > 0) ||
      'Necessário informar pelo menos 1 participante.'
  },
  risk: {
    required: (value) =>
      [0, 1, 2].indexOf(value) !== -1 || 'O campo é obrigatório.'
  },
  investment: {
    validateInvestmentValue(projectValue) {
      return (investment) =>
        Number(investment) >= Number(projectValue) ||
        `Investimento deve ser maior ou igual ao valor do projeto (R$ ${projectValue}).`;
    }
  }
};

export default rules;
