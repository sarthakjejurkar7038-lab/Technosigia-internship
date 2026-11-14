from django.urls import path
from . import views

urlpatterns = [
    path("", views.api_root, name="api-root"),
    path("hello/", views.hello, name="hello"),
    path("students/", views.StudentList.as_view(), name="student-list"),
    path("students/<int:pk>/", views.StudentDetail.as_view(), name="student-detail"),
]