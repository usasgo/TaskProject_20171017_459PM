package caf.war.TaskProject_20171017_459PM.taskclient;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;
import com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext;

@ManagedBean(name = "TaskARuleContext")
@SessionScoped
@DTManagedBean(displayName = "TaskA Rule Context", beanType = BeanType.DEFAULT)
public class TaskARuleContext  extends  com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext {
}