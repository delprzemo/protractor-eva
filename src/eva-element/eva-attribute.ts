export class EvaAttribute {
    constructor(private attributeValue: any) {}

    public canSee(value: string) {
        expect(this.attributeValue).toBe(value);
    }
}
