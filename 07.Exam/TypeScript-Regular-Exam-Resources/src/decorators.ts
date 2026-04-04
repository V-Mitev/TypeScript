export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalGetter = descriptor.get;

    if (!originalGetter) {
        throw new Error('ApplyInsurance can only be applied to getters');
    }

    descriptor.get = function (): number | undefined {
        const basePrice: number | undefined = originalGetter.call(this);

        if (basePrice === undefined) {
            return undefined;
        }

        return Math.round(basePrice * 1.12 * 100) / 100;
    };

    return descriptor;
}