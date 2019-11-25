export class Data {
    constructor(
        public id: string,
        public fileId: string,
        public lastModifiedDate: string,
        public fullName: string,
        public fullAddress: string,
        public dob: string,
        public pob: string,
        public npwp: string,
        public additionalInfo: string,
        public status: string
    ) { }
}