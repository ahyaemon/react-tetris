export function blurFocusedElement() {
    const element = document.activeElement

    if (typeof element !== "object") {
        return
    }

    if (element === null) {
        return
    }

    const target = element as any
    if (typeof target["blur"] === "function") {
        target.blur()
    }
}
