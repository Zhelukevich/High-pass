
document.addEventListener('DOMContentLoaded', () => {
  const validationAbout = new JustValidate('.about__form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontFamily: "Roboto",
      fontSize: '9px',
      color: '#FF3030',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validationAbout
    .addField('.email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',

      },
      {
        rule: 'email',
        errorMessage: 'Электронная почта имеет недопустимый формат',

      },
    ])


  const validationContacts = new JustValidate('.form-contacts', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontFamily: "Roboto",
      fontSize: '9px',
      color: '#FF3030',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validationContacts
    .addField('.name', [

      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Сообщение должно состоять более чем из 3 букв.',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Поле должно содержать не более 15 символов',
      },

      {
        rule: 'customRegexp',
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
        errorMessage: 'Недопустимый формат',
      },

    ])

    .addField('.email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',

      },
      {
        rule: 'email',
        errorMessage: 'Электронная почта имеет недопустимый формат',

      },
    ])

    .addField('.textarea', [
      {
        validator: (value) => {
          return value !== undefined && value.length > 5;
        },
        errorMessage: 'Сообщение должно состоять более чем из 5 букв.',
      },
    ])
})



