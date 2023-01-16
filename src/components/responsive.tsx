import React, { createRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

type ResponsiveContainerProps = {
   children: (sizes: { width: number, height: number } | undefined) => any
}

export const ResponsiveContainer = (props: ResponsiveContainerProps) => {
   const [ sizes, setSizes ] = useState<{ width: number, height: number } | undefined>(undefined)
   const ref = useMemo(() => createRef<HTMLDivElement>(), []) 

   const updSizes = useCallback(() => {
      if (!ref.current) {
         setSizes(undefined)
         return;
      }
      const rect = ref.current.getBoundingClientRect()
      setSizes({
         width: rect.width,
         height: rect.height
      })
   }, [])

   useLayoutEffect(() => {
      updSizes()
   }, [updSizes])

   useEffect(() => {
      if (typeof window === "undefined") return
      window.addEventListener("resize", updSizes)
      return () => window.removeEventListener("resize", updSizes)
   }, [updSizes])

   return <div ref={ref}>{props.children(sizes)}</div>
}