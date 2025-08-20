import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface EventItem {
  id: number;
  loginName: string;
  status: boolean;
}

interface UserPermissionTableProps {
  eventList: EventItem[];
  setEditForm: React.Dispatch<
    React.SetStateAction<{
      userId?: string;
      isActive?: boolean;
      username?: string;
    }>
  >;
}
export default function UserPermissionTable({
  setEditForm,
  eventList,
}: UserPermissionTableProps) {
  return (
    <div className="  bg-primary-200 p-4 rounded-lg shadow-2xl">
      {eventList?.length === 0 ? (
        <h2 className="mt-3 text-secondary-900">No event yet.</h2>
      ) : (
        <table className=" w-full  text-secondary-900  px-2 overflow-x-auto ">
          <thead>
            <tr className="font-semibold bg-primary-400  w-full   ">
              <th className="p-2  ">Sr No.</th>
              <th className="p-2  ">Login Name</th>
              <th className="p-2 ">Status</th>
              <th className="p-2 ">Action</th>
            </tr>
          </thead>

          <tbody>
            {eventList?.map((event, index) => (
              <tr
                key={event?.id}
                className={`hover:bg-primary-600 text-sm ${
                  index % 2 === 0 ? "bg-primary-200" : "bg-primary-100"
                } `}
              >
                <td className="p-2  text-center ">{index + 1}</td>
                <td className="p-2  text-center">{event?.loginName}</td>
                <td className="p-2  text-center">
                  {event?.status === true ? "Open" : "Closed"}
                </td>
                <td className="p-2 text-center">
                  <div className="relative group" title="Edit">
                    <button
                      className={` py-1 px-2 cursor-pointer`}
                      onClick={() =>
                        setEditForm({
                          userId: event.id.toString(),
                          username: event.loginName,
                          isActive: event.status,
                        })
                      }
                    >
                      <FontAwesomeIcon
                        icon={faEdit}
                        style={{ color: "#279639" }}
                      />
                    </button>

                    <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-no-wrap">
                      <span>Edit</span>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 -mt-1"></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
