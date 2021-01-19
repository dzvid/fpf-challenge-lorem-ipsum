const required = (v) => !!v || 'O campo é obrigatório.';

const rules = {
  name: { required },
  end_date: { required },
  start_date: { required },
  value: {
    required,
    validateInvestmentValue(projectValue) {
      return (investment) => {
        return (
          Number(investment) >= Number(projectValue) ||
          `Investimento deve ser maior ou igual ao valor do projeto (R$ ${projectValue}).`
        );
      };
    }
  },
  participants: {
    atLeastOne: (array) =>
      (!!array && array.length > 0) ||
      'Necessário informar pelo menos 1 participante.'
  },
  risk: {
    required: (value) =>
      [0, 1, 2].indexOf(value) !== -1 || 'O campo é obrigatório.'
  }
};

export default rules;
