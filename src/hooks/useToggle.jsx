import { useEffect } from "react";

function useToggle(func, ref, state) {

    const handler = () => {
        func()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handler)

    })


}