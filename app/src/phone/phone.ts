import mitt from "mitt"

interface basePhone{
    call:Function,
    answer:Function
}

const emitter=mitt()
export const phone:basePhone={
    call:emitter.emit,
    answer:emitter.on
}