import*as e from"../../models/heap_snapshot_model/heap_snapshot_model.js";import*as a from"./heap_snapshot_worker.js";self.HeapSnapshotModel=self.HeapSnapshotModel||{},HeapSnapshotModel=HeapSnapshotModel||{},HeapSnapshotModel.HeapSnapshotProgressEvent=e.HeapSnapshotModel.HeapSnapshotProgressEvent,HeapSnapshotModel.baseSystemDistance=e.HeapSnapshotModel.baseSystemDistance,HeapSnapshotModel.AllocationNodeCallers=e.HeapSnapshotModel.AllocationNodeCallers,HeapSnapshotModel.SerializedAllocationNode=e.HeapSnapshotModel.SerializedAllocationNode,HeapSnapshotModel.AllocationStackFrame=e.HeapSnapshotModel.AllocationStackFrame,HeapSnapshotModel.Node=e.HeapSnapshotModel.Node,HeapSnapshotModel.Edge=e.HeapSnapshotModel.Edge,HeapSnapshotModel.Aggregate=e.HeapSnapshotModel.Aggregate,HeapSnapshotModel.AggregateForDiff=e.HeapSnapshotModel.AggregateForDiff,HeapSnapshotModel.Diff=e.HeapSnapshotModel.Diff,HeapSnapshotModel.DiffForClass=e.HeapSnapshotModel.DiffForClass,HeapSnapshotModel.ComparatorConfig=e.HeapSnapshotModel.ComparatorConfig,HeapSnapshotModel.WorkerCommand=e.HeapSnapshotModel.WorkerCommand,HeapSnapshotModel.ItemsRange=e.HeapSnapshotModel.ItemsRange,HeapSnapshotModel.StaticData=e.HeapSnapshotModel.StaticData,HeapSnapshotModel.Statistics=e.HeapSnapshotModel.Statistics,HeapSnapshotModel.NodeFilter=e.HeapSnapshotModel.NodeFilter,HeapSnapshotModel.SearchConfig=e.HeapSnapshotModel.SearchConfig,HeapSnapshotModel.Samples=e.HeapSnapshotModel.Samples,HeapSnapshotModel.Location=e.HeapSnapshotModel.Location;const o=self,p=new a.HeapSnapshotWorkerDispatcher.HeapSnapshotWorkerDispatcher(o,(e=>self.postMessage(e)));var t;t=p.dispatchMessage.bind(p),o.addEventListener("message",t,!1),self.postMessage("workerReady"),self.HeapSnapshotWorker=self.HeapSnapshotWorker||{},HeapSnapshotWorker=HeapSnapshotWorker||{},HeapSnapshotWorker.AllocationProfile=a.AllocationProfile.AllocationProfile,HeapSnapshotWorker.TopDownAllocationNode=a.AllocationProfile.TopDownAllocationNode,HeapSnapshotWorker.BottomUpAllocationNode=a.AllocationProfile.BottomUpAllocationNode,HeapSnapshotWorker.FunctionAllocationInfo=a.AllocationProfile.FunctionAllocationInfo,HeapSnapshotWorker.HeapSnapshotItem=a.HeapSnapshot.HeapSnapshotItem,HeapSnapshotWorker.HeapSnapshotEdge=a.HeapSnapshot.HeapSnapshotEdge,HeapSnapshotWorker.HeapSnapshotItemIterator=a.HeapSnapshot.HeapSnapshotItemIterator,HeapSnapshotWorker.HeapSnapshotItemIndexProvider=a.HeapSnapshot.HeapSnapshotItemIndexProvider,HeapSnapshotWorker.HeapSnapshotNodeIndexProvider=a.HeapSnapshot.HeapSnapshotNodeIndexProvider,HeapSnapshotWorker.HeapSnapshotEdgeIndexProvider=a.HeapSnapshot.HeapSnapshotEdgeIndexProvider,HeapSnapshotWorker.HeapSnapshotRetainerEdgeIndexProvider=a.HeapSnapshot.HeapSnapshotRetainerEdgeIndexProvider,HeapSnapshotWorker.HeapSnapshotEdgeIterator=a.HeapSnapshot.HeapSnapshotEdgeIterator,HeapSnapshotWorker.HeapSnapshotRetainerEdge=a.HeapSnapshot.HeapSnapshotRetainerEdge,HeapSnapshotWorker.HeapSnapshotRetainerEdgeIterator=a.HeapSnapshot.HeapSnapshotRetainerEdgeIterator,HeapSnapshotWorker.HeapSnapshotNode=a.HeapSnapshot.HeapSnapshotNode,HeapSnapshotWorker.HeapSnapshotNodeIterator=a.HeapSnapshot.HeapSnapshotNodeIterator,HeapSnapshotWorker.HeapSnapshotIndexRangeIterator=a.HeapSnapshot.HeapSnapshotIndexRangeIterator,HeapSnapshotWorker.HeapSnapshotFilteredIterator=a.HeapSnapshot.HeapSnapshotFilteredIterator,HeapSnapshotWorker.HeapSnapshotProgress=a.HeapSnapshot.HeapSnapshotProgress,HeapSnapshotWorker.HeapSnapshotProblemReport=a.HeapSnapshot.HeapSnapshotProblemReport,HeapSnapshotWorker.HeapSnapshot=a.HeapSnapshot.HeapSnapshot,HeapSnapshotWorker.HeapSnapshotHeader=a.HeapSnapshot.HeapSnapshotHeader,HeapSnapshotWorker.HeapSnapshotItemProvider=a.HeapSnapshot.HeapSnapshotItemProvider,HeapSnapshotWorker.HeapSnapshotEdgesProvider=a.HeapSnapshot.HeapSnapshotEdgesProvider,HeapSnapshotWorker.HeapSnapshotNodesProvider=a.HeapSnapshot.HeapSnapshotNodesProvider,HeapSnapshotWorker.JSHeapSnapshot=a.HeapSnapshot.JSHeapSnapshot,HeapSnapshotWorker.JSHeapSnapshotNode=a.HeapSnapshot.JSHeapSnapshotNode,HeapSnapshotWorker.JSHeapSnapshotEdge=a.HeapSnapshot.JSHeapSnapshotEdge,HeapSnapshotWorker.JSHeapSnapshotRetainerEdge=a.HeapSnapshot.JSHeapSnapshotRetainerEdge,HeapSnapshotWorker.HeapSnapshotLoader=a.HeapSnapshotLoader.HeapSnapshotLoader,HeapSnapshotWorker.HeapSnapshotWorkerDispatcher=a.HeapSnapshotWorkerDispatcher.HeapSnapshotWorkerDispatcher;
