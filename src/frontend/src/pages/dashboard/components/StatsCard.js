import useFetch from '../../../hooks/useFetch';

const StatsCard = ({header, url, unit}) => {

    const { error, isPending, data: value } = useFetch(url)

    return (
        <div class="col-12  m-3">
            <div class="card ">
                <div class="card-body d-block d-md-flex align-items-center justify-content-center">
                    <div class="icon icon-shape icon-md icon-shape-primary rounded-circle mr-3 mb-4 mb-md-0"><span class="fas fa-wallet"></span></div>
                    <div>
                        <span class="d-block h6 font-weight-normal">
                            {header}
                        </span>
                        <h5 class="h3 font-weight-bold mb-1">{value + " " + (unit ? unit: "")}</h5>
                        {/* <div class="small mt-2">
                            <span class="fas fa-angle-up text-success"></span>
                            <span class="text-success font-weight-bold">18.2%</span> higher vs previous month
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StatsCard