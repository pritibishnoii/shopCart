
export const AcordianItem = ({ data, isOpen, setIsOpen }) => {
    // const [isOpen,setIsOpen]=useState(false)

    return (
        <div className="border-2 mt-1">
            <div className="bg-slate-200 flex justify-between p-2 cursor-pointer"
                onClick={() => {
                    setIsOpen(isOpen => !isOpen)

                }}
            >
                <h1 className="text-blue-400  text-lg">{data.title}</h1>
                {
                    isOpen ? <span>⬆️</span> : <span>⬇️</span>
                }
            </div>

            {
                isOpen && <p className="p-2 text-gray-500">{data.body}</p>
            }

        </div>
    )
}
