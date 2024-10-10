import {useEffect} from "react";

export const useOutside = (triggerRef, ref, cb) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            console.log(triggerRef, ref)
            const isOutside =
                triggerRef?.current &&
                ref?.current &&
                !triggerRef?.current.contains(e.target) &&
                !ref?.current.contains(e.target);
            if (isOutside) {
                console.log("Outside");
                cb();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.addEventListener("click", handleClickOutside);
        };
    }, [ref, triggerRef, cb]);
};