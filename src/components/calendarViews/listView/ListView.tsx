import Table from "../../calendarTable/Table";
import "./ListView.css";

type ListViewProps = {
  seasonData: {
    seasons: {
      name: string;
      duration: any[];
    }[];
  };
};

const ListView: React.FC<ListViewProps> = ({ seasonData }) => {
  const winterdata = seasonData.seasons[0].duration;
  const summerdata = seasonData.seasons[1].duration;

  return (
    <div className="list-view">
      <Table title="Winter Season" range="(November - March)" data={winterdata} />
      <Table title="Summer Season" range="(April - October)" data={summerdata} />
    </div>
  );
};

export default ListView;