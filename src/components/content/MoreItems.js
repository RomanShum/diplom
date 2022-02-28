export default function MoreItems({onHandleClick}){
    const onHandleMore=()=>{
        onHandleClick();
    }
    return <div class="text-center" onClick={onHandleMore}>
    <button class="btn btn-outline-primary">Загрузить ещё</button>
  </div>
}