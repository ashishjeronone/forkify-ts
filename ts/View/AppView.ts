export abstract class View{
    constructor(public parent: Element){}

    abstract template():string;

    eventsMap = (): {[key: string]: (e) => void}{
        return {}
    }

    //bind event
    bindEvent(fragment: DocumentFragment){
        const eventMap = this.eventsMap();

        for(let eventKey in eventMap){
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach((elm) => {
                elm.addEventListener(eventName, eventMap[eventKey])
            })
        }
    }

    //render
    render(){
        this.parent.innerHTML = ''
        const template = document.createElement('template')

        template.innerHTML = this.template();
        //bind event
        this.bindEvent(template.content)

        this.parent.append(template.content)
    }
}