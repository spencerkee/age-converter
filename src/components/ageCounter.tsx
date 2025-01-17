export default function AgeCounter(props) {
    return (
        <div class="flex items-center space-x-2">
            <button
                type="button"
                class="border rounded-lg px-2 border-gray-900"
                onClick={() => {
                    let changedAge = props.ageConverter(props.age()) - 1;
                    let revertedAge = props.ageReverter(changedAge);
                    props.setAge(revertedAge);
                }}
            >
                -
            </button>
            <output class="p-10px">{props.name}: {props.ageConverter(props.age())} {props.unitName}</output>

            <button
                type="button"
                class="border rounded-lg px-2 border-gray-900"
                onClick={() => {
                    let changedAge = props.ageConverter(props.age()) + 1;
                    let revertedAge = props.ageReverter(changedAge);
                    props.setAge(revertedAge);
                }}
            >
                +
            </button>
        </div >
    )
}


