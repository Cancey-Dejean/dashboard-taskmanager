import BoardHeader from "@/components/BoardHeader"
import Card from "@/components/Card"
import ColumnHead from "@/components/ColumnHead"

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <BoardHeader boardTitle="Task manager" />

      <div className="flex gap-[30px]">
        <div className="flex-1 flex flex-col gap-5">
          <ColumnHead title="To Do" />

          <Card
            title="Mobile App Development"
            assignee
            tags
            previewImage
            userRow
            watchers
            messages
            subtasks
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <ColumnHead title="IN PROGRESS" variant="in-progress" />

          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
            progress
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
            progress
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
            progress
          />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <ColumnHead title="DONE" variant="done" />

          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
            progress
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            previewImage
            progress
            watchers
            messages
            subtasks
          />
          <Card
            title="Mobile App Development"
            assignee
            tags
            userRow
            watchers
            messages
            subtasks
            progress
          />
        </div>
      </div>
    </div>
  )
}
