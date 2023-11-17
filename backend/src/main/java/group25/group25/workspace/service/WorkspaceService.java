package group25.group25.workspace.service;

import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface WorkspaceService {
    public Workspace saveWorkspace(Workspace workspace);
    public boolean assignWorkspaceUser(Map<String, String> json);
    public List<Workspace> findAll();
    public Workspace findById(int id);
}
