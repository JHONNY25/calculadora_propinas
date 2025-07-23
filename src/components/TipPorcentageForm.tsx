import { TIP_PERCENTAGES } from "../database/TipPercentageForm";

type TipPorcentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>  
}

export default function TipPorcentageForm({setTip}: TipPorcentageFormProps) {
    /* const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tipValue = parseFloat(event.target.value);
        onTipChange(tipValue);
    }; */

    return (
        <form className=''>
            <label className='text-lg font-bold'>Select Tip Percentage:</label>
            <div className=''>
                {TIP_PERCENTAGES.map(tip => (
                    <div key={tip.id}>
                        <input 
                            type="radio" 
                            name="tip" 
                            value={tip.value} 
                            onChange={(e) => setTip(parseFloat(e.target.value))}
                        />
                        <label>{tip.label}</label>
                    </div>
                ))}
            </div>
        </form>
    );
}