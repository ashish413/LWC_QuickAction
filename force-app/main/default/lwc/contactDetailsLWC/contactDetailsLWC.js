import { LightningElement,api, wire  } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Contact.Account.Name';

const fields = [NAME_FIELD, TITLE_FIELD, PHONE_FIELD, EMAIL_FIELD,ACCOUNT_NAME_FIELD];

export default class ContactDetailsLWC extends LightningElement {
    @api recordId;
    @api objectApiName = 'Contact';
    accountName = NAME_FIELD;
    @wire(getRecord, { recordId: '$recordId', fields })
    contact;

    get name() {
        return getFieldValue(this.contact.data, NAME_FIELD);
    }
    get accountname() {
        return getFieldValue(this.contact.data, ACCOUNT_NAME_FIELD);
    }
    get title() {
        return getFieldValue(this.contact.data, TITLE_FIELD);
    }
    get phone() {
        return getFieldValue(this.contact.data, PHONE_FIELD);
    }
    get email() {
        return getFieldValue(this.contact.data, EMAIL_FIELD);
    }
}