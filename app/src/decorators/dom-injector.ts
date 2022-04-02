export function domInjector(element: string) {
    return function(target: any, propertyKey: string) {
        let elemento: HTMLElement

        const getter = function() {
            if(!elemento) {
                elemento = document.querySelector(element) as HTMLElement
            }

            return elemento
        }

        Object.defineProperty(target, propertyKey, { get: getter })
    }
}