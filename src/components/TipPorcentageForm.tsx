
export default function TipPorcentageForm({ onTipChange }: { onTipChange: (tip: number) => void }) {
    const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tipValue = parseFloat(event.target.value);
        onTipChange(tipValue);
    };

    return (
        <form className='flex flex-col gap-4'>
            <label className='text-lg font-bold'>Select Tip Percentage:</label>
            <div className='flex gap-4'>
                <input type="radio" name="tip" value="0.1" onChange={handleTipChange} />
                <label>10%</label>
                <input type="radio" name="tip" value="0.15" onChange={handleTipChange} />
                <label>15%</label>
                <input type="radio" name="tip" value="0.2" onChange={handleTipChange} />
                <label>20%</label>
            </div>
        </form>
    );
}