import { FormOptions } from 'ngx-core-library';


export const CustomFormControlsOptions: FormOptions = {
    asegurado: {
        label: 'Asegurado',
        control: {
            type: 'cm-autocomplete',
            class: 'col-sm-8',
            path: '/listas/LIST_ASEGURADOS',
            options: {
                key: 'cod_asegurado',
                value: 'list_val_aseg',
                description: 'cod_asegurado'
            },
            notSelectedItemIsValid: true,
            apiSearchFieldname: 'p_filtro',
            pasteFieldOnSelect: 'cod_asegurado',
            defaultValue: '',
        },
        class: 'col-sm-12 col-md-12 col-lg-3'
    },
    seccion: {
        label: 'Sección',
        control: {
            type: 'cm-select',
            searchable: true,
            path: '/listas/LIST_TIPOS_SECCIONES',
            options: {
                key: 'value',
                value: 'label'
            },
            pasteFieldOnSelect: 'value',
            hasEmptyOption: true
        },
        class: 'col-sm-12 col-md-12 col-lg-2'
    }
}