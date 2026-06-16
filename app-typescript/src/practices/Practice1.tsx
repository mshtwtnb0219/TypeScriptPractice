export const Practice1 = () => {
    const getTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total;

    }
    const onClickPractice = () => {
        // eslint-disable-next-line no-useless-assignment
        let total1: number = 0;
        total1 = getTotalFee(200)
        console.log(total1)
    }
    return (
        <>
            <div>練習問題1</div>
            <button onClick={onClickPractice}>実行</button>
        </>
    )
}