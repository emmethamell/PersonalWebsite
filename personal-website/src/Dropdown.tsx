import { useState } from 'react'

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="Menu">
                    Options
                </button>
            </div>
        </div>
    )
}

export default Dropdown;



