import Date from "./date"
import Link from "next/link"

export default function IndexItem(props) {
  return(
    <>
      <li className="border-b border-indigo-100 pt-1" key={props.id}>
        <span className="text-gray-400 text-sm">
          <Date className="text-gray-400 text-sm" dateString={props.date} />
        </span>
        <span className="ml-1 px-1 border rounded-lg border-solid bg-gray-100 hover:bg-gray-200">
          <Link href={`/categories/${props.category}`}>
            <a className="text-sm text-gray-700">{props.category}</a>
          </Link>
        </span>
        <Link href={`/posts/${props.id}`}>
          <a className="block pb-6 hover:underline">
            <span className="text-lg font-semibold">{props.title}</span>
            <div className="text-sm text-gray-500">{props.summary}</div>
          </a>
        </Link>
      </li>
    </>
  )
}