export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function(...args: any[]) {
            const t1 = performance.now()
            metodoOriginal.apply(this, args)
            const t2 = performance.now()

            console.log(`Método ${propertyKey}, tempo de exec: ${((t2-t1)/1000)} segundos`)
        }

        return descriptor
    }
}