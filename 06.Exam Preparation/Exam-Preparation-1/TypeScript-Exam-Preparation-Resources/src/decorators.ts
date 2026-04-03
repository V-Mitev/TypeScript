export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;

    if (!originalGetter) {
        throw new Error('ConvertToEuro can only be applied to getters');
    }

    descriptor.get = function () {
        const bgnPrice = originalGetter?.call(this);

        if (bgnPrice === undefined) {
            return undefined;
        }

        const bgnToEuro = bgnPrice / 1.95583;

        return Number(bgnToEuro.toFixed(2));
    }

    return descriptor;
}